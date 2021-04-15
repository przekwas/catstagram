import bcrypt from 'bcrypt';

export async function generateHash(password: string) {
	try {
		const salt = await bcrypt.genSalt(12);
		const hash = await bcrypt.hash(password, salt);
		return hash;
	} catch (err) {
		throw err;
	}
}

export async function compareHash(password: string, hash: string) {
	try {
		const compared = await bcrypt.compare(password, hash);
		return compared;
	} catch (err) {
		throw err;
	}
}