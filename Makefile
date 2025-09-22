.PHONY: help lint style test pre-commit clean

# Python module paths
PYTHON_MODULES := app tests

help:
	@echo "Available commands:"
	@echo "  make format     - Apply linting rules and fix issues where possible"
	@echo "  make check    - Check for style issues without changing code"
	@echo "  make test     - Run tests with coverage"
	@echo "  make clean    - Remove build artifacts"

# Apply linting rules (fix issues where possible)
format:
	@echo "Applying linting fixes..."
	poetry run ruff check --fix $(PYTHON_MODULES)
	poetry run ruff format $(PYTHON_MODULES)
	poetry run isort $(PYTHON_MODULES)

# Check style without changing code
check:
	@echo "Checking code style..."
	@poetry run ruff check $(PYTHON_MODULES) || true
	@echo "------------------------------"
	@echo "run ruff format --check $(PYTHON_MODULES)"
	@poetry run ruff format --check $(PYTHON_MODULES) || true
	@echo "------------------------------"
	@echo "run isort --check-only --diff $(PYTHON_MODULES)"
	@poetry run isort --check-only --diff $(PYTHON_MODULES) || true
	@echo "------------------------------"
	@echo "run pylint $(PYTHON_MODULES)"
	@poetry run pylint $(PYTHON_MODULES) || true
	@echo "------------------------------"
	@echo "run flake8 $(PYTHON_MODULES)"
	@poetry run flake8 $(PYTHON_MODULES) || true
	@echo "------------------------------"
	@echo "run mypy $(PYTHON_MODULES)"
	@poetry run mypy $(PYTHON_MODULES) || true

# Run tests
test:
	poetry run pytest -sxv tests/unit --cov=app --cov-report=term --cov-report=xml --cov-fail-under=90

e2e:
	poetry run pytest -sxv tests/e2e --cov=app --cov-report=term --cov-report=xml --cov-fail-under=0


# Clean build artifacts
clean:
	rm -rf .coverage .mypy_cache .pytest_cache .ruff_cache coverage.xml
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type d -name "*.egg-info" -exec rm -rf {} +
	find . -type d -name "*.eggs" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete 