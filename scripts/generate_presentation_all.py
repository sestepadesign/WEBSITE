import os
import sys
import re
import shutil
import tempfile
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

# Garantir python-pptx
try:
    import pptx
    from pptx.util import Inches, Pt
    from pptx.dml.color import RGBColor
    from pptx.enum.text import PP_ALIGN
except ImportError:
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "python-pptx"], check=True)
    import pptx
    from pptx.util import Inches, Pt
    from pptx.dml.color import RGBColor
    from pptx.enum.text import PP_ALIGN

SRC_PUBLIC = Path(r"G:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public")
SRC_HTML = Path(r"G:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\presentacion-proyectos.html")
DST_BASE = Path(r"J:\Meu Drive\S'ESTEPA 2026\MEDIA 2026\PRESENTACIÓN MEJORES JARDINES")
DST_TODOS = DST_BASE / "00 - TODAS LAS FOTOS JUNTAS"
OUTPUT_PPTX_J = DST_BASE / "Presentacion_Mejores_Jardines_Sestepa.pptx"
OUTPUT_PPTX_G = Path(r"G:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\Presentacion_Mejores_Jardines_Sestepa.pptx")
PDF_DIR_PUBLIC = SRC_PUBLIC / "Presentacion Fotos"
PDF_HORIZ = PDF_DIR_PUBLIC / "Sestepa-Design-Proyectos-Horizontal.pdf"
PDF_VERT = PDF_DIR_PUBLIC / "Sestepa-Design-Proyectos-Celular-Vertical.pdf"

project_folder_names = {
    "Santa Ponsa": "01 - Santa Ponsa",
    "Sant Llorenç": "02 - Sant Llorenç",
    "Patio en Binissalem": "03 - Patio en Binissalem",
    "Andratx": "04 - Andratx",
    "Jardín Binissalem": "05 - Jardín Binissalem",
    "Jardín Mediterráneo": "06 - Jardín Mediterráneo",
    "Bunyola": "07 - Bunyola",
    "Son Vida": "08 - Son Vida",
    "Crestatx": "09 - Crestatx",
    "Puerto Andratx": "10 - Puerto Andratx",
    "Hotel Cabot Las Velas": "11 - Hotel Cabot Las Velas",
    "Finca Jardín Campos": "12 - Finca Jardín Campos",
    "Santa Eugènia": "13 - Santa Eugènia",
    "Llubí": "14 - Llubí",
    "Jardines Verticales en Mallorca": "15 - Jardines Verticales",
    "Terraza en Palma": "16 - Terraza en Palma",
    "Portals Nous": "17 - Portals Nous",
    "Marratxí": "18 - Marratxí",
    "Alcanada": "19 - Alcanada"
}

def get_font(font_name, size):
    fonts_dir = Path("C:/Windows/Fonts")
    font_path = fonts_dir / font_name
    if font_path.exists():
        try:
            return ImageFont.truetype(str(font_path), size)
        except Exception:
            pass
    try:
        return ImageFont.truetype("arial.ttf", size)
    except Exception:
        return ImageFont.load_default()

def main():
    print("=== PIPELINE MESTRE: APRESENTAÇÃO WEB, DRIVE J:, PPTX E PDFS ===")
    
    # 1. Ler galleryItems do HTML oficial
    html_content = SRC_HTML.read_text(encoding="utf-8")
    pattern = re.compile(r'\{\s*title:\s*"([^"]+)",\s*path:\s*"([^"]+)",\s*url:\s*"([^"]+)"\s*\}')
    matches = pattern.findall(html_content)
    print(f"Total de fotos catalogadas no HTML: {len(matches)}")
    
    valid_items = []
    for title, rel_path, url in matches:
        clean_rel = rel_path.lstrip("/").replace("/", os.sep)
        src_file = SRC_PUBLIC / clean_rel
        if not src_file.exists():
            import urllib.parse
            unquoted = urllib.parse.unquote(str(src_file))
            if Path(unquoted).exists():
                src_file = Path(unquoted)
        if src_file.exists():
            valid_items.append((title, src_file, url))
        else:
            print(f"[!] AVISO: Arquivo não encontrado: {rel_path}")

    total_valid = len(valid_items)
    print(f"Total de fotos válidas localizadas em disco: {total_valid}")
    if total_valid != len(matches):
        print(f"[!] ATENÇÃO: {len(matches) - total_valid} fotos não foram encontradas!")

    # 2. Atualizar pastas na Unidade J:
    if DST_BASE.exists():
        print(f"\n[*] Atualizando pastas individuais e '00 - TODAS LAS FOTOS JUNTAS' na unidade J:...")
        DST_TODOS.mkdir(parents=True, exist_ok=True)
        # Limpar fotos antigas da pasta 00
        for f in DST_TODOS.glob("*"):
            if f.is_file() and not f.name.endswith(".ini"):
                try:
                    f.unlink()
                except Exception:
                    pass

        # Copiar para pastas individuais e para 00
        for i, (title, src_file, url) in enumerate(valid_items, 1):
            # Pasta individual
            folder_name = project_folder_names.get(title, title)
            proj_dir = DST_BASE / folder_name
            proj_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src_file, proj_dir / src_file.name)
            
            # Pasta 00 com prefixo sequencial
            clean_title = re.sub(r'[\\/*?:"<>|]', '_', title).replace(' ', '_')
            seq_filename = f"{i:02d}_{clean_title}_{src_file.name}"
            shutil.copy2(src_file, DST_TODOS / seq_filename)
            
        print(f"[+] Pastas individuais e pasta 00 sincronizadas com as {total_valid} fotos.")

    # 3. Gerar PowerPoint (PPTX) 16:9 Widescreen
    print("\n[*] Gerando PowerPoint 16:9 Widescreen...")
    prs = pptx.Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    BG_COLOR = RGBColor(10, 10, 10)
    TEXT_WHITE = RGBColor(240, 240, 240)
    TEXT_MUTED = RGBColor(160, 160, 160)
    ACCENT_GOLD = RGBColor(210, 195, 165)

    # Slide 1: Capa
    slide_cover = prs.slides.add_slide(blank_layout)
    bg_shape = slide_cover.shapes.add_shape(pptx.enum.shapes.MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    bg_shape.fill.solid()
    bg_shape.fill.fore_color.rgb = BG_COLOR
    bg_shape.line.fill.background()

    tx_box = slide_cover.shapes.add_textbox(Inches(1.5), Inches(2.2), Inches(10.333), Inches(3.2))
    tf = tx_box.text_frame
    tf.word_wrap = True
    p0 = tf.paragraphs[0]
    p0.text = "S ' E S T E P A   D E S I G N   S T U D I O"
    p0.font.size = Pt(22)
    p0.font.bold = True
    p0.font.color.rgb = ACCENT_GOLD
    p0.font.name = "Georgia"
    p0.alignment = PP_ALIGN.CENTER

    p1 = tf.add_paragraph()
    p1.text = "ARQUITECTURA DEL PAISAJE & DISEÑO BOTÁNICO · MALLORCA"
    p1.font.size = Pt(13)
    p1.font.color.rgb = TEXT_MUTED
    p1.font.name = "Arial"
    p1.alignment = PP_ALIGN.CENTER
    p1.space_before = Pt(14)

    p2 = tf.add_paragraph()
    p2.text = "Presentación y Selección de Mejores Proyectos"
    p2.font.size = Pt(18)
    p2.font.color.rgb = TEXT_WHITE
    p2.font.name = "Georgia"
    p2.alignment = PP_ALIGN.CENTER
    p2.space_before = Pt(28)

    p3 = tf.add_paragraph()
    p3.text = "Haz clic en el nombre de cada proyecto para abrirlo en la web oficial"
    p3.font.size = Pt(11)
    p3.font.color.rgb = TEXT_MUTED
    p3.font.name = "Arial"
    p3.alignment = PP_ALIGN.CENTER
    p3.space_before = Pt(12)

    # Slides das fotos
    tmp_dir = Path(tempfile.mkdtemp(prefix="sestepa_pipe_"))
    try:
        for i, (title, src_file, url) in enumerate(valid_items, 1):
            with Image.open(src_file) as img:
                img_rgb = img.convert("RGB")
                orig_w, orig_h = img_rgb.size
                tmp_jpg = tmp_dir / f"slide_{i:03d}.jpg"
                img_rgb.save(tmp_jpg, "JPEG", quality=90)

            slide = prs.slides.add_slide(blank_layout)
            bg = slide.shapes.add_shape(pptx.enum.shapes.MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
            bg.fill.solid()
            bg.fill.fore_color.rgb = BG_COLOR
            bg.line.fill.background()

            max_w = 13.333 - 1.2
            max_h = 7.5 - 1.3
            aspect = orig_w / orig_h
            if aspect > (max_w / max_h):
                fit_w = max_w
                fit_h = max_w / aspect
            else:
                fit_h = max_h
                fit_w = max_h * aspect

            left = (13.333 - fit_w) / 2
            top = 0.35 + (max_h - fit_h) / 2
            slide.shapes.add_picture(str(tmp_jpg), Inches(left), Inches(top), Inches(fit_w), Inches(fit_h))

            bar_top = Inches(6.85)
            link_box = slide.shapes.add_textbox(Inches(0.8), bar_top, Inches(7.5), Inches(0.45))
            ltf = link_box.text_frame
            ltf.word_wrap = False
            lp = ltf.paragraphs[0]
            run = lp.add_run()
            run.text = f"{title.upper()}  ↗"
            run.font.size = Pt(12)
            run.font.bold = True
            run.font.color.rgb = ACCENT_GOLD
            run.font.name = "Georgia"
            full_url = f"https://design.sestepa.com{url}" if url.startswith("/") else url
            run.hyperlink.address = full_url

            count_box = slide.shapes.add_textbox(Inches(9.0), bar_top, Inches(3.5), Inches(0.45))
            ctf = count_box.text_frame
            cp = ctf.paragraphs[0]
            cp.text = f"{i:02d}  /  {total_valid:02d}"
            cp.font.size = Pt(11)
            cp.font.color.rgb = TEXT_MUTED
            cp.font.name = "Arial"
            cp.alignment = PP_ALIGN.RIGHT

        # Slide Encerramento
        slide_end = prs.slides.add_slide(blank_layout)
        bg_end = slide_end.shapes.add_shape(pptx.enum.shapes.MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
        bg_end.fill.solid()
        bg_end.fill.fore_color.rgb = BG_COLOR
        bg_end.line.fill.background()

        tx_end = slide_end.shapes.add_textbox(Inches(1.5), Inches(2.3), Inches(10.333), Inches(3.0))
        etf = tx_end.text_frame
        etf.word_wrap = True
        ep0 = etf.paragraphs[0]
        ep0.text = "S ' E S T E P A   D E S I G N"
        ep0.font.size = Pt(22)
        ep0.font.bold = True
        ep0.font.color.rgb = ACCENT_GOLD
        ep0.font.name = "Georgia"
        ep0.alignment = PP_ALIGN.CENTER

        ep1 = etf.add_paragraph()
        ep1.text = "ARQUITECTURA DEL PAISAJE & DISEÑO BOTÁNICO MEDITERRÁNEO"
        ep1.font.size = Pt(12)
        ep1.font.color.rgb = TEXT_MUTED
        ep1.font.name = "Arial"
        ep1.alignment = PP_ALIGN.CENTER
        ep1.space_before = Pt(14)

        ep2 = etf.add_paragraph()
        ep2.text = "design.sestepa.com  ·  Mallorca"
        ep2.font.size = Pt(14)
        ep2.font.color.rgb = TEXT_WHITE
        ep2.font.name = "Georgia"
        ep2.alignment = PP_ALIGN.CENTER
        ep2.space_before = Pt(24)

        OUTPUT_PPTX_G.parent.mkdir(parents=True, exist_ok=True)
        prs.save(OUTPUT_PPTX_G)
        print(f"[+] PPTX salvo com sucesso em G: {OUTPUT_PPTX_G.name}")

        if DST_BASE.exists():
            prs.save(OUTPUT_PPTX_J)
            print(f"[+] PPTX salvo com sucesso em J: {OUTPUT_PPTX_J}")
    finally:
        shutil.rmtree(tmp_dir, ignore_errors=True)

    # 4. Gerar PDFs de Alta Qualidade (Horizontal A4 e Celular Vertical A4)
    print("\n[*] Gerando PDF Horizontal (A4 Apaisado)...")
    # A4 150 DPI: 1754 x 1240 px
    PAGE_W_H = 1754
    PAGE_H_H = 1240
    
    font_title_h = get_font("georgia.ttf", 26)
    font_counter_h = get_font("arial.ttf", 20)
    font_cover_brand_h = get_font("georgia.ttf", 42)
    font_cover_sub_h = get_font("arial.ttf", 22)
    font_cover_title_h = get_font("georgia.ttf", 34)

    pdf_h_pages = []

    # Capa Horizontal
    cover_img_h = Image.new("RGB", (PAGE_W_H, PAGE_H_H), color=(10, 10, 10))
    d_cov = ImageDraw.Draw(cover_img_h)
    d_cov.text((PAGE_W_H // 2, 400), "S ' E S T E P A   D E S I G N   S T U D I O", fill=(210, 195, 165), font=font_cover_brand_h, anchor="mm")
    d_cov.text((PAGE_W_H // 2, 480), "ARQUITECTURA DEL PAISAJE & DISEÑO BOTÁNICO · MALLORCA", fill=(160, 160, 160), font=font_cover_sub_h, anchor="mm")
    d_cov.text((PAGE_W_H // 2, 600), "Presentación y Selección de Mejores Proyectos", fill=(240, 240, 240), font=font_cover_title_h, anchor="mm")
    d_cov.text((PAGE_W_H // 2, 670), "design.sestepa.com", fill=(210, 195, 165), font=font_cover_sub_h, anchor="mm")
    pdf_h_pages.append(cover_img_h)

    # Slides Horizontal
    for i, (title, src_file, url) in enumerate(valid_items, 1):
        page_img = Image.new("RGB", (PAGE_W_H, PAGE_H_H), color=(10, 10, 10))
        d_page = ImageDraw.Draw(page_img)

        # Foto
        with Image.open(src_file) as im:
            im = ImageOps.exif_transpose(im)
            im = im.convert("RGB")
            orig_w, orig_h = im.size
            max_pw = PAGE_W_H - 140
            max_ph = PAGE_H_H - 180
            aspect = orig_w / orig_h
            if aspect > (max_pw / max_ph):
                pw = max_pw
                ph = int(max_pw / aspect)
            else:
                ph = max_ph
                pw = int(max_ph * aspect)
            im_resized = im.resize((pw, ph), Image.Resampling.LANCZOS)
            px = (PAGE_W_H - pw) // 2
            py = 50 + (max_ph - ph) // 2
            page_img.paste(im_resized, (px, py))

        # Barra inferior
        bar_y = PAGE_H_H - 75
        d_page.text((70, bar_y), title.upper(), fill=(210, 195, 165), font=font_title_h)
        counter_text = f"{i:02d} / {total_valid:02d}"
        d_page.text((PAGE_W_H - 70, bar_y + 4), counter_text, fill=(160, 160, 160), font=font_counter_h, anchor="ra")
        pdf_h_pages.append(page_img)

    # Salvar PDF Horizontal
    PDF_DIR_PUBLIC.mkdir(parents=True, exist_ok=True)
    pdf_h_pages[0].save(
        PDF_HORIZ,
        save_all=True,
        append_images=pdf_h_pages[1:],
        quality=70,
        optimize=True
    )
    size_h_mb = PDF_HORIZ.stat().st_size / (1024 * 1024)
    print(f"[+] PDF Horizontal gerado com sucesso: {PDF_HORIZ.name} ({size_h_mb:.2f} MB, {len(pdf_h_pages)} páginas)")
    if DST_BASE.exists():
        shutil.copy2(PDF_HORIZ, DST_BASE / PDF_HORIZ.name)

    # 5. Gerar PDF Celular Vertical (A4 Retrato 1240 x 1754 px)
    print("\n[*] Gerando PDF Celular Vertical (A4 Retrato)...")
    PAGE_W_V = 1240
    PAGE_H_V = 1754

    font_title_v = get_font("georgia.ttf", 32)
    font_counter_v = get_font("arial.ttf", 26)
    font_cover_brand_v = get_font("georgia.ttf", 46)
    font_cover_sub_v = get_font("arial.ttf", 24)
    font_cover_title_v = get_font("georgia.ttf", 36)

    pdf_v_pages = []

    # Capa Vertical
    cover_img_v = Image.new("RGB", (PAGE_W_V, PAGE_H_V), color=(10, 10, 10))
    d_cov_v = ImageDraw.Draw(cover_img_v)
    d_cov_v.text((PAGE_W_V // 2, 650), "S ' E S T E P A   D E S I G N", fill=(210, 195, 165), font=font_cover_brand_v, anchor="mm")
    d_cov_v.text((PAGE_W_V // 2, 740), "ARQUITECTURA DEL PAISAJE & DISEÑO BOTÁNICO", fill=(160, 160, 160), font=font_cover_sub_v, anchor="mm")
    d_cov_v.text((PAGE_W_V // 2, 790), "MALLORCA", fill=(160, 160, 160), font=font_cover_sub_v, anchor="mm")
    d_cov_v.text((PAGE_W_V // 2, 930), "Colección de Mejores Proyectos", fill=(240, 240, 240), font=font_cover_title_v, anchor="mm")
    d_cov_v.text((PAGE_W_V // 2, 1000), "design.sestepa.com", fill=(210, 195, 165), font=font_cover_sub_v, anchor="mm")
    pdf_v_pages.append(cover_img_v)

    # Slides Vertical
    for i, (title, src_file, url) in enumerate(valid_items, 1):
        page_img = Image.new("RGB", (PAGE_W_V, PAGE_H_V), color=(10, 10, 10))
        d_page = ImageDraw.Draw(page_img)

        # Foto (otimizada para celular vertical)
        with Image.open(src_file) as im:
            im = ImageOps.exif_transpose(im)
            im = im.convert("RGB")
            orig_w, orig_h = im.size
            max_pw = PAGE_W_V - 80
            max_ph = PAGE_H_V - 220
            aspect = orig_w / orig_h
            if aspect > (max_pw / max_ph):
                pw = max_pw
                ph = int(max_pw / aspect)
            else:
                ph = max_ph
                pw = int(max_ph * aspect)
            im_resized = im.resize((pw, ph), Image.Resampling.LANCZOS)
            px = (PAGE_W_V - pw) // 2
            py = 90 + (max_ph - ph) // 2
            page_img.paste(im_resized, (px, py))

        # Barra inferior para mobile
        bar_y = PAGE_H_V - 95
        d_page.text((60, bar_y), title.upper(), fill=(210, 195, 165), font=font_title_v)
        counter_text = f"{i:02d} / {total_valid:02d}"
        d_page.text((PAGE_W_V - 60, bar_y + 4), counter_text, fill=(160, 160, 160), font=font_counter_v, anchor="ra")
        pdf_v_pages.append(page_img)

    # Salvar PDF Vertical
    pdf_v_pages[0].save(
        PDF_VERT,
        save_all=True,
        append_images=pdf_v_pages[1:],
        quality=72,
        optimize=True
    )
    size_v_mb = PDF_VERT.stat().st_size / (1024 * 1024)
    print(f"[+] PDF Vertical gerado com sucesso: {PDF_VERT.name} ({size_v_mb:.2f} MB, {len(pdf_v_pages)} páginas)")
    if DST_BASE.exists():
        shutil.copy2(PDF_VERT, DST_BASE / PDF_VERT.name)

    # Verificar limite de 25 MB do Cloudflare Pages
    if size_h_mb >= 25.0 or size_v_mb >= 25.0:
        print("[!] ERRO CRÍTICO: Um dos PDFs excedeu o limite de 25 MB do Cloudflare Pages!")
        sys.exit(1)

    print("\n[V] SUCESSO COMPLETO! Todos os ativos estão perfeitamente sincronizados e em conformidade.")

if __name__ == "__main__":
    main()
