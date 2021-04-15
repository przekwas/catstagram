import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext<
	[IAuthState, React.Dispatch<React.SetStateAction<IAuthState>>]
>([null, () => {}]);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authState, setAuthState] = useState<IAuthState>({
		authenticated: false,
		checking: false,
		token: localStorage.getItem('token') || null
	});

	

	return (
		<AuthContext.Provider value={[authState, setAuthState]}>{children}</AuthContext.Provider>
	);
};

interface AuthProviderProps {
	children: React.ReactNode;
}

interface IAuthState {
	authenticated: boolean;
	checking: boolean;
	token: string;
}

export default AuthProvider;
