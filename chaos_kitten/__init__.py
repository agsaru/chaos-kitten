"""Chaos Kitten - The adorable AI agent that knocks things off your API tables.

An agentic AI security testing tool that intelligently finds vulnerabilities in APIs.
Built for the CNCF ecosystem.
"""

__version__ = "0.1.0"
__author__ = "Md Haaris Hussain"
__email__ = "mdhaarishussain@gmail.com"

from chaos_kitten.cli import app

__all__ = ["app", "__version__"]
