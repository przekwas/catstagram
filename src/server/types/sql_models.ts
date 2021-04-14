export interface UsersTable {
	id?: string;
	first_name?: string;
	middle_initial?: string;
	last_name?: string;
	username?: string;
	email?: string;
	password?: string;
	role?: 1 | 9;
	banned?: 0 | 1;
	avatar_url?: string;
	created_at?: Date;
	updated_at?: Date;
}

export interface MySqlResponse {
	fieldCount: number;
	affectedRows: number;
	insertId: number;
	serverStatus: number;
	warningCount: number;
	message: string;
	protocol41: boolean;
	changedRows: number;
}
