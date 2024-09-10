# README

Welcome to the documentation for setting up and running a Python project with `venv` and `mkdocs`. This guide will walk you through the steps to get your development environment ready, activate your virtual environment, and handle common issues you might encounter.

## Prerequisites

Before you start, ensure that you have the following installed on your system:

- **Python**: Make sure you have Python installed. You can download it from [python.org](https://www.python.org/) or use a package manager like Homebrew on macOS.
- **Homebrew** (macOS only): If you are on macOS, Homebrew simplifies the installation of software packages.

## Setting Up Your Environment

### 1. Create and Activate a Virtual Environment

A virtual environment helps manage dependencies for your project separately from the global Python environment. Follow these steps to set it up:

1. **Create a Virtual Environment**:
   Open your terminal and navigate to your project directory. Then, run the following command to create a virtual environment:

   ```bash
   python -m venv venv
   ```

   This will create a directory named `venv` containing a self-contained Python environment.

2. **Activate the Virtual Environment**:
   To use the virtual environment, you need to activate it. Run the following command:

   ```bash
   source venv/bin/activate
   ```

   After activation, your terminal prompt should change to indicate that you are now working inside the virtual environment.

### 2. Installing Dependencies

Once the virtual environment is activated, you can install the necessary dependencies for your project. Typically, you'll have a `requirements.txt` file listing the required packages. Install them using:

```bash
pip install -r requirements.txt
```

### 3. Running MkDocs

**MkDocs** is a static site generator that's geared towards project documentation. To build and serve your documentation, follow these steps:

1. **Install MkDocs**:
   If MkDocs is not listed in your `requirements.txt`, you can install it directly:

   ```bash
   pip install mkdocs
   ```

2. **Build the Documentation**:
   To build your documentation, use the following command:

   ```bash
   mkdocs build
   ```

   If you encounter any errors related to library paths when running the build command, it’s usually due to missing libraries. This is often seen on macOS where the dynamic linker needs to be directed to the appropriate library locations.

   **Fixing Library Path Errors**:
   If you get errors related to library paths, set the `DYLD_FALLBACK_LIBRARY_PATH` environment variable by running:

   ```bash
   export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib:$DYLD_FALLBACK_LIBRARY_PATH
   ```

   Copy and paste this command into your terminal before running `mkdocs build` again.

3. **Serve the Documentation**:
   To preview your documentation locally, use:

   ```bash
   mkdocs serve
   ```

   This command will start a local development server and you can view your documentation at `http://127.0.0.1:8000`.

## Troubleshooting

- **Library Path Errors**:
  If you encounter errors related to missing libraries on macOS, ensure that the `DYLD_FALLBACK_LIBRARY_PATH` is set correctly as described above.

- **Permission Issues**:
  If you face permission issues, make sure you have the necessary permissions to write to the directories where you’re working.

- **Dependencies**:
  Double-check your `requirements.txt` to ensure all dependencies are listed. If a specific package is missing or causing issues, install it manually with `pip`.

## Deploying to GitHub Pages

To deploy your MkDocs app to GitHub Pages, follow these steps:

1. **Ensure you are on the primary working branch** (usually `master` or `main`) of your git repository where you maintain the source documentation.

2. **Run the following command** to deploy your site:

   ```bash
   mkdocs gh-deploy
   ```

## Conclusion

By following these instructions, you should be able to set up your Python environment, run `venv`, and work with `mkdocs` effectively. If you have any further questions or run into issues not covered in this guide, consult the relevant documentation or community forums for additional support.

Happy coding! 🚀