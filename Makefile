export DENO_INSTALL := .deno
export DENO_DIR := ${DENO_INSTALL}/cache

deno := ${DENO_INSTALL}/bin/deno

.PHONY: all
all: clean build

.PHONY: build
build: cache
	${deno} run -A https://raw.github.com/4rcode/folio/main/folio.ts

.PHONY: cache
cache: ${deno}
	${deno} cache \
		https://esm.sh/react@18/jsx-runtime \
		https://esm.sh/preact@10/jsx-runtime

.PHONY: clean
clean:
	find . -path '*/target*' -delete
	find . -path '*/${DENO_INSTALL}*' -delete
	mkdir -p '${DENO_DIR}'

${deno}:
	curl -fsSL https://deno.land/install.sh | sh
