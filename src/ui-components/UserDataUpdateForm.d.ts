/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserDataUpdateFormInputValues = {
    cognitoSub?: string;
    favorites?: string[];
};
export declare type UserDataUpdateFormValidationValues = {
    cognitoSub?: ValidationFunction<string>;
    favorites?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDataUpdateFormOverridesProps = {
    UserDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cognitoSub?: PrimitiveOverrideProps<TextFieldProps>;
    favorites?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userData?: UserData;
    onSubmit?: (fields: UserDataUpdateFormInputValues) => UserDataUpdateFormInputValues;
    onSuccess?: (fields: UserDataUpdateFormInputValues) => void;
    onError?: (fields: UserDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDataUpdateFormInputValues) => UserDataUpdateFormInputValues;
    onValidate?: UserDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserDataUpdateForm(props: UserDataUpdateFormProps): React.ReactElement;
