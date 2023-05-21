/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeacherCreateFormInputValues = {
    name?: string;
    image?: string;
    bio?: string;
};
export declare type TeacherCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeacherCreateFormOverridesProps = {
    TeacherCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeacherCreateFormProps = React.PropsWithChildren<{
    overrides?: TeacherCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeacherCreateFormInputValues) => TeacherCreateFormInputValues;
    onSuccess?: (fields: TeacherCreateFormInputValues) => void;
    onError?: (fields: TeacherCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeacherCreateFormInputValues) => TeacherCreateFormInputValues;
    onValidate?: TeacherCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeacherCreateForm(props: TeacherCreateFormProps): React.ReactElement;
