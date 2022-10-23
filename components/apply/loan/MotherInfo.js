import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import FileUpload from "../visa/FileUpload";
import { DataContext } from "../../../store/GlobalState";
import { toast } from "react-toastify";

const MotherInfo = ({ handleBack, handleNext }) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    isMotherPresent,
    motherIdNumber,
    motherFrontPhotoOfIdCard,
    motherBackPhotoOfIdCard,
    photoOfMother,
  } = state.loanApplicant.motherInfo;
  const emptyInput =
    !isMotherPresent ||
    !motherIdNumber ||
    !motherFrontPhotoOfIdCard ||
    !motherBackPhotoOfIdCard ||
    !photoOfMother;
  const handleChangeStep = () => {
    if (emptyInput)
      return toast("Please fill out all the fieds!", { type: "error" });
    handleNext();
  };
  const handleInput = (e) => {
    dispatch({
      type: "CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("state", state);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <FormLabel id="isMotherPresent">Mother is</FormLabel>
        <RadioGroup
          row
          aria-labelledby="isMotherPresent"
          name="isMotherPresent"
          required
        >
          <FormControlLabel
            name="isMotherPresent"
            onChange={handleInput}
            value="yes"
            control={<Radio />}
            label="Alive and kicking"
          />
          <FormControlLabel
            name="isMotherPresent"
            onChange={handleInput}
            value="no"
            control={<Radio />}
            label="Dead"
          />
        </RadioGroup>
        {isMotherPresent === "no" && (
          <>
            <div className="mt-3 mb-2">Death Certificate</div>
            <FileUpload
              accept="application/pdf"
              name="motherDeathCertificate"
              type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
            />
          </>
        )}
        <div className="visa-form-input">
          <TextField
            name="motherIdNumber"
            onChange={handleInput}
            required
            fullWidth
            label="ID Card Number"
            variant="outlined"
          />
        </div>

        <div className="mt-3 mb-2">Front Photo of ID Card</div>
        <FileUpload
          accept="image/*"
          name="motherFrontPhotoOfIdCard"
          type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
        />
        <div className="mt-3 mb-2">Back Photo of ID Card</div>
        <FileUpload
          accept="image/*"
          name="motherBackPhotoOfIdCard"
          type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
        />
        <div className="mt-3 mb-2">Mother&#39;s Photo</div>
        <FileUpload
          accept="image/*"
          name="photoOfMother"
          type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
        />
        {isMotherPresent === "yes" && (
          <>
            <div className="mt-3 mb-2">Signature</div>
            <FileUpload
              accept="image/*"
              name="signatureOfMother"
              type="CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS"
            />
          </>
        )}
        <div className="mt-4 d-flex align-items-center justify-content-between">
          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>

          <Button type="submit" variant="contained" onClick={handleChangeStep}>
            Next
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default MotherInfo;
