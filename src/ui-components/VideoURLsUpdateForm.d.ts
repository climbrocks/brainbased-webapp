/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { VideoURLs } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideoURLsUpdateFormInputValues = {
    guid?: string;
    srcvideo?: string;
    MP4?: string;
    CMAF?: string;
    HLS?: string;
    DASH?: string;
    MSS?: string;
};
export declare type VideoURLsUpdateFormValidationValues = {
    guid?: ValidationFunction<string>;
    srcvideo?: ValidationFunction<string>;
    MP4?: ValidationFunction<string>;
    CMAF?: ValidationFunction<string>;
    HLS?: ValidationFunction<string>;
    DASH?: ValidationFunction<string>;
    MSS?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoURLsUpdateFormOverridesProps = {
    VideoURLsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    guid?: PrimitiveOverrideProps<TextFieldProps>;
    srcvideo?: PrimitiveOverrideProps<TextFieldProps>;
    MP4?: PrimitiveOverrideProps<TextFieldProps>;
    CMAF?: PrimitiveOverrideProps<TextFieldProps>;
    HLS?: PrimitiveOverrideProps<TextFieldProps>;
    DASH?: PrimitiveOverrideProps<TextFieldProps>;
    MSS?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoURLsUpdateFormProps = React.PropsWithChildren<{
    overrides?: VideoURLsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    videoURLs?: VideoURLs;
    onSubmit?: (fields: VideoURLsUpdateFormInputValues) => VideoURLsUpdateFormInputValues;
    onSuccess?: (fields: VideoURLsUpdateFormInputValues) => void;
    onError?: (fields: VideoURLsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoURLsUpdateFormInputValues) => VideoURLsUpdateFormInputValues;
    onValidate?: VideoURLsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VideoURLsUpdateForm(props: VideoURLsUpdateFormProps): React.ReactElement;
