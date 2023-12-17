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
export declare type VideoURLsCreateFormInputValues = {
    guid?: string;
    srcvideo?: string;
    MP4?: string;
    CMAF?: string;
    HLS?: string;
    DASH?: string;
    MSS?: string;
};
export declare type VideoURLsCreateFormValidationValues = {
    guid?: ValidationFunction<string>;
    srcvideo?: ValidationFunction<string>;
    MP4?: ValidationFunction<string>;
    CMAF?: ValidationFunction<string>;
    HLS?: ValidationFunction<string>;
    DASH?: ValidationFunction<string>;
    MSS?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoURLsCreateFormOverridesProps = {
    VideoURLsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    guid?: PrimitiveOverrideProps<TextFieldProps>;
    srcvideo?: PrimitiveOverrideProps<TextFieldProps>;
    MP4?: PrimitiveOverrideProps<TextFieldProps>;
    CMAF?: PrimitiveOverrideProps<TextFieldProps>;
    HLS?: PrimitiveOverrideProps<TextFieldProps>;
    DASH?: PrimitiveOverrideProps<TextFieldProps>;
    MSS?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoURLsCreateFormProps = React.PropsWithChildren<{
    overrides?: VideoURLsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VideoURLsCreateFormInputValues) => VideoURLsCreateFormInputValues;
    onSuccess?: (fields: VideoURLsCreateFormInputValues) => void;
    onError?: (fields: VideoURLsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoURLsCreateFormInputValues) => VideoURLsCreateFormInputValues;
    onValidate?: VideoURLsCreateFormValidationValues;
} & React.CSSProperties>;
export default function VideoURLsCreateForm(props: VideoURLsCreateFormProps): React.ReactElement;
