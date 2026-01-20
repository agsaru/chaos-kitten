# 🐱 Chaos Kitten

> The adorable AI agent that knocks things off your API tables

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![CNCF](https://img.shields.io/badge/CNCF-Cloud%20Native-blue)](https://www.cncf.io/)

## 🎯 What is Chaos Kitten?

Chaos Kitten is an **agentic AI security testing tool** that acts like a mischievous cat—it explores your API, understands the business logic, and systematically tries to "break" things before malicious actors do.

Unlike traditional fuzzers (ZAP, Burp) that spray random payloads, Chaos Kitten **reasons** about your API structure and crafts intelligent attacks.

### 🤔 Why Chaos Kitten?

AI-powered "vibe coding" tools (Claude, Cursor, Windsurf) generate backend APIs at incredible speed, but they often skip critical security measures:

- ❌ Missing authentication/authorization
- ❌ No input validation
- ❌ Vulnerable to SQL injection, XSS, and other OWASP Top 10 attacks
- ❌ Logic flaws that allow unauthorized access

**Chaos Kitten finds these issues before attackers do.**

## 🚀 Quick Start

```bash
# Install
pip install chaos-kitten

# Initialize config
chaos-kitten init

# Run against your API
chaos-kitten scan --config chaos-kitten.yaml
```

### Example Output

```
🐱 Chaos Kitten v1.0.0
📋 Parsing OpenAPI spec...
🎯 Found 12 endpoints
🧠 Planning attack strategies...

🐾 Testing /api/login
   ⚠️  I knocked this vase over! (SQL Injection found)

🐾 Testing /api/users/{id}
   ⚠️  I played with this string! (IDOR vulnerability)

📊 Report saved to ./reports/chaos-kitten-2026-01-20.html
```

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Chaos Kitten                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────┐      ┌──────────────┐                 │
│  │   The Brain  │──────│  The Paws    │                 │
│  │ (Orchestrator)│      │  (Executor)  │                 │
│  │              │      │              │                 │
│  │ - OpenAPI    │      │ - httpx      │                 │
│  │   Parser     │      │ - Playwright │                 │
│  │ - LLM Agent  │      │ - Async      │                 │
│  └──────┬───────┘      └──────┬───────┘                 │
│         │                     │                          │
│         └─────────┬───────────┘                          │
│                   │                                      │
│         ┌─────────▼─────────┐                            │
│         │   The Toy Box     │                            │
│         │  (Attack Library) │                            │
│         └─────────┬─────────┘                            │
│                   │                                      │
│         ┌─────────▼─────────┐                            │
│         │  The Litterbox    │                            │
│         │   (Reporter)      │                            │
│         └───────────────────┘                            │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| **The Brain** | LLM-powered orchestrator that plans attacks |
| **The Paws** | Async HTTP executor with Playwright support |
| **The Toy Box** | YAML/JSON attack profiles (easy to contribute!) |
| **The Litterbox** | Beautiful HTML/Markdown security reports |

## 📦 Installation

### From PyPI (Recommended)

```bash
pip install chaos-kitten
```

### From Source

```bash
git clone https://github.com/mdhaarishussain/chaos-kitten.git
cd chaos-kitten
pip install -e .
```

## ⚙️ Configuration

Create a `chaos-kitten.yaml` file:

```yaml
target:
  base_url: "http://localhost:3000"
  openapi_spec: "./openapi.json"
  auth:
    type: "bearer"
    token: "${API_TOKEN}"

agent:
  llm_provider: "anthropic"
  model: "claude-3-5-sonnet-20241022"
  temperature: 0.7

executor:
  concurrent_requests: 5
  timeout: 30
  rate_limit: 10

safety:
  allowed_domains:
    - "localhost"
    - "*.test.com"
  destructive_mode: false
```

## 🎮 Usage

### Basic Scan

```bash
chaos-kitten scan --target http://localhost:3000
```

### With OpenAPI Spec

```bash
chaos-kitten scan --spec openapi.json --target http://localhost:3000
```

### CI/CD Integration

```yaml
# .github/workflows/security-test.yml
name: Chaos Kitten Security Scan

on: [pull_request]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Start API
        run: docker-compose up -d
      - name: Run Chaos Kitten
        run: |
          pip install chaos-kitten
          chaos-kitten scan --fail-on-critical
```

## 🎁 Contributing

We love contributions! Chaos Kitten is designed to be beginner-friendly:

### 🐣 First-Timers (No Coding!)
- Add attack payloads to `toys/data/naughty_strings.json`
- Create attack profiles in `toys/` folder
- Fix typos in documentation

### 🐥 Beginners (Basic Python)
- Write unit tests
- Add CLI features
- Create new YAML attack profiles

### 🐔 Intermediate
- Implement new attack strategies
- Add GraphQL support
- Enhance Playwright integration

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 🔒 Safety & Ethics

⚖️ **LEGAL NOTICE**

Chaos Kitten is intended for testing YOUR OWN applications or systems where you have explicit permission. Unauthorized access to computer systems is illegal. Users are responsible for compliance with applicable laws. The developers assume no liability for misuse.

### Built-in Safeguards

- ✅ **Allowlist-Only:** Won't scan domains not in `allowed_domains`
- ✅ **Rate Limiting:** Respects server resources
- ✅ **Non-Destructive Default:** Prevents DROP/DELETE operations
- ✅ **Audit Logging:** All actions logged

## 🗺️ Roadmap

### Phase 1 (MVP) ✅
- [x] OpenAPI parsing
- [x] SQL injection, XSS, IDOR detection
- [x] HTML/Markdown reporting
- [x] CLI tool

### Phase 2
- [ ] GraphQL support
- [ ] gRPC/Protobuf support
- [ ] WebSocket testing
- [ ] GitHub Action

### Phase 3 (CNCF)
- [ ] Kubernetes Operator
- [ ] Service Mesh integration
- [ ] Real-time dashboard
- [ ] OPA integration

## 🏆 Acknowledgments

Built for **Aperture 3.0** by Resourcio Community

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/mdhaarishussain/chaos-kitten/main/docs/assets/kitten.png" alt="Chaos Kitten" width="100">
  <br>
  <i>"Breaking your code before hackers do"</i>
</p>
