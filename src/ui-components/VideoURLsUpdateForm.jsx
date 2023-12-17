/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { VideoURLs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function VideoURLsUpdateForm(props) {
  const {
    id: idProp,
    videoURLs: videoURLsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    guid: "",
    srcvideo: "",
    MP4: "",
    CMAF: "",
    HLS: "",
    DASH: "",
    MSS: "",
  };
  const [guid, setGuid] = React.useState(initialValues.guid);
  const [srcvideo, setSrcvideo] = React.useState(initialValues.srcvideo);
  const [MP4, setMP4] = React.useState(initialValues.MP4);
  const [CMAF, setCMAF] = React.useState(initialValues.CMAF);
  const [HLS, setHLS] = React.useState(initialValues.HLS);
  const [DASH, setDASH] = React.useState(initialValues.DASH);
  const [MSS, setMSS] = React.useState(initialValues.MSS);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = videoURLsRecord
      ? { ...initialValues, ...videoURLsRecord }
      : initialValues;
    setGuid(cleanValues.guid);
    setSrcvideo(cleanValues.srcvideo);
    setMP4(cleanValues.MP4);
    setCMAF(cleanValues.CMAF);
    setHLS(cleanValues.HLS);
    setDASH(cleanValues.DASH);
    setMSS(cleanValues.MSS);
    setErrors({});
  };
  const [videoURLsRecord, setVideoURLsRecord] =
    React.useState(videoURLsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(VideoURLs, idProp)
        : videoURLsModelProp;
      setVideoURLsRecord(record);
    };
    queryData();
  }, [idProp, videoURLsModelProp]);
  React.useEffect(resetStateValues, [videoURLsRecord]);
  const validations = {
    guid: [{ type: "Required" }],
    srcvideo: [],
    MP4: [],
    CMAF: [],
    HLS: [],
    DASH: [],
    MSS: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          guid,
          srcvideo,
          MP4,
          CMAF,
          HLS,
          DASH,
          MSS,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            VideoURLs.copyOf(videoURLsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VideoURLsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Guid"
        isRequired={true}
        isReadOnly={false}
        value={guid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              guid: value,
              srcvideo,
              MP4,
              CMAF,
              HLS,
              DASH,
              MSS,
            };
            const result = onChange(modelFields);
            value = result?.guid ?? value;
          }
          if (errors.guid?.hasError) {
            runValidationTasks("guid", value);
          }
          setGuid(value);
        }}
        onBlur={() => runValidationTasks("guid", guid)}
        errorMessage={errors.guid?.errorMessage}
        hasError={errors.guid?.hasError}
        {...getOverrideProps(overrides, "guid")}
      ></TextField>
      <TextField
        label="Srcvideo"
        isRequired={false}
        isReadOnly={false}
        value={srcvideo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              guid,
              srcvideo: value,
              MP4,
              CMAF,
              HLS,
              DASH,
              MSS,
            };
            const result = onChange(modelFields);
            value = result?.srcvideo ?? value;
          }
          if (errors.srcvideo?.hasError) {
            runValidationTasks("srcvideo", value);
          }
          setSrcvideo(value);
        }}
        onBlur={() => runValidationTasks("srcvideo", srcvideo)}
        errorMessage={errors.srcvideo?.errorMessage}
        hasError={errors.srcvideo?.hasError}
        {...getOverrideProps(overrides, "srcvideo")}
      ></TextField>
      <TextField
        label="Mp4"
        isRequired={false}
        isReadOnly={false}
        value={MP4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              guid,
              srcvideo,
              MP4: value,
              CMAF,
              HLS,
              DASH,
              MSS,
            };
            const result = onChange(modelFields);
            value = result?.MP4 ?? value;
          }
          if (errors.MP4?.hasError) {
            runValidationTasks("MP4", value);
          }
          setMP4(value);
        }}
        onBlur={() => runValidationTasks("MP4", MP4)}
        errorMessage={errors.MP4?.errorMessage}
        hasError={errors.MP4?.hasError}
        {...getOverrideProps(overrides, "MP4")}
      ></TextField>
      <TextField
        label="Cmaf"
        isRequired={false}
        isReadOnly={false}
        value={CMAF}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              guid,
              srcvideo,
              MP4,
              CMAF: value,
              HLS,
              DASH,
              MSS,
            };
            const result = onChange(modelFields);
            value = result?.CMAF ?? value;
          }
          if (errors.CMAF?.hasError) {
            runValidationTasks("CMAF", value);
          }
          setCMAF(value);
        }}
        onBlur={() => runValidationTasks("CMAF", CMAF)}
        errorMessage={errors.CMAF?.errorMessage}
        hasError={errors.CMAF?.hasError}
        {...getOverrideProps(overrides, "CMAF")}
      ></TextField>
      <TextField
        label="Hls"
        isRequired={false}
        isReadOnly={false}
        value={HLS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              guid,
              srcvideo,
              MP4,
              CMAF,
              HLS: value,
              DASH,
              MSS,
            };
            const result = onChange(modelFields);
            value = result?.HLS ?? value;
          }
          if (errors.HLS?.hasError) {
            runValidationTasks("HLS", value);
          }
          setHLS(value);
        }}
        onBlur={() => runValidationTasks("HLS", HLS)}
        errorMessage={errors.HLS?.errorMessage}
        hasError={errors.HLS?.hasError}
        {...getOverrideProps(overrides, "HLS")}
      ></TextField>
      <TextField
        label="Dash"
        isRequired={false}
        isReadOnly={false}
        value={DASH}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              guid,
              srcvideo,
              MP4,
              CMAF,
              HLS,
              DASH: value,
              MSS,
            };
            const result = onChange(modelFields);
            value = result?.DASH ?? value;
          }
          if (errors.DASH?.hasError) {
            runValidationTasks("DASH", value);
          }
          setDASH(value);
        }}
        onBlur={() => runValidationTasks("DASH", DASH)}
        errorMessage={errors.DASH?.errorMessage}
        hasError={errors.DASH?.hasError}
        {...getOverrideProps(overrides, "DASH")}
      ></TextField>
      <TextField
        label="Mss"
        isRequired={false}
        isReadOnly={false}
        value={MSS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              guid,
              srcvideo,
              MP4,
              CMAF,
              HLS,
              DASH,
              MSS: value,
            };
            const result = onChange(modelFields);
            value = result?.MSS ?? value;
          }
          if (errors.MSS?.hasError) {
            runValidationTasks("MSS", value);
          }
          setMSS(value);
        }}
        onBlur={() => runValidationTasks("MSS", MSS)}
        errorMessage={errors.MSS?.errorMessage}
        hasError={errors.MSS?.hasError}
        {...getOverrideProps(overrides, "MSS")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || videoURLsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || videoURLsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
