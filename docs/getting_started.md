# Getting Started with Chaos Kitten 🐱

Welcome to Chaos Kitten! This guide will help you get up and running quickly.

## Prerequisites

- Python 3.10 or higher
- An API to test (preferably a local development server)
- An LLM API key (Anthropic or OpenAI)

## Installation

### Option 1: pip (Recommended)

```bash
pip install chaos-kitten
```

### Option 2: From Source

```bash
git clone https://github.com/mdhaarishussain/chaos-kitten.git
cd chaos-kitten
pip install -e .
```

## Quick Start

### 1. Initialize Configuration

```bash
chaos-kitten init
```

This creates a `chaos-kitten.yaml` configuration file.

### 2. Edit Configuration

Open `chaos-kitten.yaml` and update:

```yaml
target:
  base_url: "http://localhost:3000"  # Your API URL
  openapi_spec: "./openapi.json"      # Path to OpenAPI spec

agent:
  llm_provider: "anthropic"
  model: "claude-3-5-sonnet-20241022"
```

### 3. Set API Key

Create a `.env` file:

```bash
ANTHROPIC_API_KEY=your_key_here
```

### 4. Run a Scan

```bash
chaos-kitten scan
```

## Understanding Results

### Severity Levels

| Level | Color | Description |
|-------|-------|-------------|
| CRITICAL | 🔴 | Immediate action required |
| HIGH | 🟠 | Should be fixed soon |
| MEDIUM | 🟡 | Should be addressed |
| LOW | 🟢 | Minor issues |

### Sample Output

```
🐱 Chaos Kitten v1.0.0
📋 Parsing OpenAPI spec...
🎯 Found 12 endpoints

🐾 Testing /api/login
   ⚠️  I knocked this vase over! (SQL Injection)
   Severity: CRITICAL
```

## Next Steps

- [Architecture Overview](./architecture.md)
- [Configuration Reference](./configuration.md)
- [Contributing Guide](../CONTRIBUTING.md)

## Need Help?

- Open an [Issue](https://github.com/mdhaarishussain/chaos-kitten/issues)
- Join our [Discussions](https://github.com/mdhaarishussain/chaos-kitten/discussions)
