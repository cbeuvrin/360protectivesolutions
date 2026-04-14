import os

replacements = {
    "360 Protective Solutions": "Worldwide Security Options",
    "360 Protection": "Worldwide Security Options",
    "360 PROTECTION": "WORLDWIDE SECURITY OPTIONS"
}

target_dirs = ["app", "components"]
extensions = [".tsx", ".ts", ".js", ".jsx"]

for target_dir in target_dirs:
    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if any(file.endswith(ext) for ext in extensions):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r') as f:
                        content = f.read()
                    
                    new_content = content
                    for old, new in replacements.items():
                        new_content = new_content.replace(old, new)
                    
                    if new_content != content:
                        with open(file_path, 'w') as f:
                            f.write(new_content)
                        print(f"Updated: {file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
