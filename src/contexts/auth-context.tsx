import React, { createContext } from "react";

interface IProps {
  accessToken: string;
}

const initialValues = {
  accessToken: "",
} as IProps;

const AuthContext = createContext<IProps>(initialValues);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const accessToken = localStorage.getItem("accessToken") || "";

  const authValues = {
    accessToken,
  } as IProps;

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
