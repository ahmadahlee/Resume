import os
import shutil
import subprocess
import sys

def run_command(command):
    print(f"Running: {' '.join(command)}")
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
        return False
    return True

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 automate_resume.py <folder_name>")
        sys.exit(1)

    folder_name = sys.argv[1]

    # Create directory
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
        print(f"Created folder: {folder_name}")

    # Files to generate
    tasks = [
        (["npm", "run", "build"], "ahmad_ali_resume.html"),
        (["node", "scripts/pdf_gen.js"], "ahmad_ali_resume.pdf"),
        (["python3", "scripts/word_gen.py"], "ahmad_ali_resume.docx")
    ]

    generated_files = []

    # Run all generation tasks first
    for cmd, filename in tasks:
        if run_command(cmd):
            if os.path.exists(filename):
                generated_files.append(filename)
            else:
                print(f"Warning: Expected file {filename} not found after command.")
        else:
            print(f"Failed to run command for {filename}")

    # Move files after all are generated
    for filename in generated_files:
        target_path = os.path.join(folder_name, filename)
        if os.path.exists(target_path):
            os.remove(target_path)
        shutil.move(filename, target_path)
        print(f"Moved {filename} to {folder_name}/")

    print(f"\nDone! All files generated in: {folder_name}")

if __name__ == "__main__":
    main()
