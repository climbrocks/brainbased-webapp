/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Video } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideoUpdateFormInputValues = {
    title?: string;
    description?: string;
    url?: string;
    poster?: string;
    duration?: number;
    date?: string;
};
export declare type VideoUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    poster?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoUpdateFormOverridesProps = {
    VideoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    poster?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoUpdateFormProps = React.PropsWithChildren<{
    overrides?: VideoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    video?: Video;
    onSubmit?: (fields: VideoUpdateFormInputValues) => VideoUpdateFormInputValues;
    onSuccess?: (fields: VideoUpdateFormInputValues) => void;
    onError?: (fields: VideoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoUpdateFormInputValues) => VideoUpdateFormInputValues;
    onValidate?: VideoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VideoUpdateForm(props: VideoUpdateFormProps): React.ReactElement;
