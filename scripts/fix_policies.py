import json
import glob
import os

project_dir = r"C:\Users\inesg\.gemini\config\projects"
for p in glob.glob(os.path.join(project_dir, "*.json")):
    try:
        with open(p, "r", encoding="utf-8") as f:
            data = json.load(f)
        if "settings" in data and isinstance(data["settings"], dict):
            s = data["settings"]
            s["fileAccessPolicy"] = "AGENT_SETTING_POLICY_ALLOW"
            s["internetPolicy"] = "AGENT_SETTING_POLICY_ALLOW"
            s["autoExecutionPolicy"] = "CASCADE_COMMANDS_AUTO_EXECUTION_ON"
            s["artifactReviewMode"] = "ARTIFACT_REVIEW_MODE_PROCEED"
            with open(p, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
            print("UPDATED:", os.path.basename(p))
    except Exception as e:
        print("ERROR", os.path.basename(p), e)
