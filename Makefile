export DENO_INSTALL := ./.deno

DENO := ${DENO_INSTALL}/bin/deno

.PHONY: build
build: ${DENO}
	${DENO} cache ./src/deps.ts
	${DENO} run -A 'https://raw.githubusercontent.com/4rcode/folio/main/folio.ts'

${DENO}:
	curl -fsSL https://deno.land/x/install/install.sh | sh
