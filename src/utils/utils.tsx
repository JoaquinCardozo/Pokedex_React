export function formatPokemonName(name: string): string {
	if (name.includes("♀")) {
		return name.replace("♀", "-f");
	}
	else if (name.includes("♂")) {
		return name.replace("♂", "-m");
	}
	else if (name.includes(".")) {
		return name.replace(".", "-");
	}
	else if (name.includes("'d")) {
		return name.replace("'d", "d");
	}
	else {
		return name.toLowerCase();
	}
}