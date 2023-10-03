export DENO_INSTALL := ./.deno

deno := ${DENO_INSTALL}/bin/deno

.PHONY: all
all: clean build

.PHONY: build
build: cache
	${deno} run -rA https://raw.github.com/4rcode/folio/main/folio.ts

.PHONY: cache
cache: ${deno}
	${deno} cache ./src/deps.ts

.PHONY: clean
clean:
	rm -rf ${DENO_INSTALL}

${deno}:
	curl -fsSL https://deno.land/x/install/install.sh | sh
