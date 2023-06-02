/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Teacher } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeacherUpdateFormInputValues = {
    name?: string;
    image?: string;
    bio?: string;
};
export declare type TeacherUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeacherUpdateFormOverridesProps = {
    TeacherUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeacherUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeacherUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teacher?: Teacher;
    onSubmit?: (fields: TeacherUpdateFormInputValues) => TeacherUpdateFormInputValues;
    onSuccess?: (fields: TeacherUpdateFormInputValues) => void;
    onError?: (fields: TeacherUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeacherUpdateFormInputValues) => TeacherUpdateFormInputValues;
    onValidate?: TeacherUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeacherUpdateForm(props: TeacherUpdateFormProps): React.ReactElement;
