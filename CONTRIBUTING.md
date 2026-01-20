# Contributing to Chaos Kitten 🐱

Thank you for your interest in contributing to Chaos Kitten! This project is designed to be beginner-friendly, and we welcome contributions of all sizes.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)

## 📜 Code of Conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/) Code of Conduct. By participating, you are expected to uphold this code.

## 🎯 How Can I Contribute?

### 🐣 First-Timers (No Coding Required!)

Perfect for your first open-source contribution:

1. **Add Attack Payloads**
   - Edit `toys/data/naughty_strings.json`
   - Add SQL injection, XSS, or other payloads
   - No Python knowledge needed!

2. **Create Password Lists**
   - Add common passwords to `toys/data/common_passwords.txt`
   - Research and add regional/language-specific passwords

3. **Improve Documentation**
   - Fix typos
   - Add examples
   - Translate docs

### 🐥 Beginners (Basic Python)

1. **Create Attack Profiles**
   - Write YAML files in `toys/` folder
   - Follow existing patterns
   - Example: Create `toys/xss_reflected.yaml`

2. **Write Unit Tests**
   - Add tests in `tests/` folder
   - Use pytest

3. **CLI Improvements**
   - Add colors to terminal output
   - Improve help messages

### 🐔 Intermediate

1. **Implement Attack Strategies**
   - JWT manipulation
   - GraphQL introspection
   - WebSocket testing

2. **Browser Automation**
   - Enhance Playwright integration
   - Add screenshot capabilities

### 🦅 Advanced

1. **Core Agent Logic**
   - Improve LangGraph orchestration
   - Optimize prompt engineering
   - Multi-step exploit chains

2. **Infrastructure**
   - Kubernetes Operator
   - GitHub Actions integration

## 🛠️ Development Setup

### Prerequisites

- Python 3.10+
- Git
- (Optional) Docker

### Installation

```bash
# Clone the repo
git clone https://github.com/mdhaarishussain/chaos-kitten.git
cd chaos-kitten

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install in development mode
pip install -e ".[dev]"

# Run tests
pytest
```

### Environment Variables

Copy `.env.example` to `.env` and fill in:

```bash
cp .env.example .env
```

```env
ANTHROPIC_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here  # Optional
```

## 🔄 Pull Request Process

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/chaos-kitten.git
cd chaos-kitten
git remote add upstream https://github.com/mdhaarishussain/chaos-kitten.git
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes

- Write code
- Add tests
- Update docs if needed

### 4. Commit

Use conventional commits:

```bash
git commit -m "feat: add XSS detection module"
git commit -m "fix: handle empty API response"
git commit -m "docs: update README examples"
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `test`: Adding tests
- `refactor`: Code refactoring
- `chore`: Maintenance

### 5. Push & Create PR

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub.

### PR Checklist

- [ ] Tests pass (`pytest`)
- [ ] Code is formatted (`black .`)
- [ ] Linting passes (`ruff .`)
- [ ] Docs updated (if applicable)
- [ ] Commit messages follow conventions

## 📝 Style Guidelines

### Python

- Use [Black](https://github.com/psf/black) for formatting
- Use [Ruff](https://github.com/astral-sh/ruff) for linting
- Type hints are encouraged
- Docstrings for public functions

```python
def execute_attack(
    endpoint: str,
    payload: str,
    timeout: int = 30
) -> AttackResult:
    """Execute an attack against the target endpoint.
    
    Args:
        endpoint: The API endpoint URL
        payload: The attack payload to send
        timeout: Request timeout in seconds
        
    Returns:
        AttackResult containing response and analysis
    """
    ...
```

### YAML Attack Profiles

```yaml
name: "Attack Name"
category: "injection"  # injection, access-control, xss, etc.
severity: "critical"   # critical, high, medium, low
description: "Brief description"

payloads:
  - "payload1"
  - "payload2"

success_indicators:
  - "error message"
  - status_code: 500

remediation: |
  How to fix this vulnerability.
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

## 🏷️ Issue Labels

| Label | Description |
|-------|-------------|
| `good first issue` | Perfect for newcomers |
| `help wanted` | Looking for contributors |
| `beginner-friendly` | Suitable for beginners |
| `enhancement` | New feature |
| `bug` | Something isn't working |
| `documentation` | Docs improvements |

## 🎉 Recognition

All contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Featured on our website (coming soon!)

## 💬 Getting Help

- **Questions?** Open a [Discussion](https://github.com/mdhaarishussain/chaos-kitten/discussions)
- **Found a bug?** Open an [Issue](https://github.com/mdhaarishussain/chaos-kitten/issues)
- **Want to chat?** Join our Discord (coming soon!)

---

<p align="center">
  <i>"Every contribution matters, no matter how small!"</i>
  <br><br>
  🐱 Happy Hacking! 🐱
</p>
