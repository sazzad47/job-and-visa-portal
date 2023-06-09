export const initialState = {
    register: {
         name: '',
         email: '',
         password: '',
         cf_password: '',
         code: ''
    },
    visaApplicant: {
        personalInfo: {
           IdentityCard: '',
           IdCardNumber: '',
           firstName: '',
           middleName: '',
           surname: '',
           fathersNameFirst: '',
           fathersNameMiddle: '',
           fathersNameSurname: '',
           mothersNameFirst: '',
           mothersNameMiddle: '',
           mothersNameSurname: '',
           currentJob: '',
           placeOfBirth: '',
           PlaceOfBirthCity: '',
           gender: '',
           dateOfBirth: '',
           dateOfIdCardIssue: '',
           religion: '',
           nationality: '',
           bloodGroup: '',
           maritalStatus: '',
           educationalQualification: '',
           languages: '',
           ieltsScore: '',
           ieltsDocument: '',
           frontPhotoOfIdCard: '',
           backPhotoOfIdCard: '',
           photo: '',
           signature: '',

        },
        passportInfo: {
           passportType: '',
           passportNumber: '',
           passportIssuingAuthority: '',
           passportIssuingPlace: '',
           passportDateOfIssue: '',
           passportDateOfExpiry: '',
           passportNationality: '',
           passportDocument: '',
           isOtherPassport: '',
           otherPassportNumber: '',
           otherPassportIssuingAuthority: '',
           otherPassportIssuingPlace: '',
           otherPassportDateOfIssue: '',
           otherPassportDateOfExpiry: '',
           otherPassportNationality: '',
           otherPassportDocument: '',
        },
        visaProcessingInfo: {
           visaType: '',
           visaIssueCountry: '',
           visaDuration: '',
           visaIssuingPlace: '',
           entryDate: '',
           stayDuration: '',
           flightReservation: '',
           inspectionCard: '',
           invitationLetter: '',
           utilityBill: '',
           policeClearanceCertificate: '',
           bankStatementOfLast6M: '',
           bankSolvencyCertificate: '',
           placeToStay: '',
        },
        home: {
           locatedAtHome: '',
           homeStreetAddress: '',
           homeStreetAddressLine2: '',
           homeCity: '',
           homeProvince: '',
           homePostal: '',
           homeStayDuration: '',
           familyDependentOn: '',
           familyMember: '',
        },
        bank: {
           bankName: '',
           bankStateIssuDate: '',
           bankStateDocument: '',
        }, 
        medical: {
           hospitalName: '',
           MedicalReportIssueDate: '',
           MedicalReportDocument: '',
        },
        contact: {
           streetAddress: '',
           streetAddressLine2: '',
           city: '',
           province: '',
           postal: '',
           email: '',
           homeEmail: '',
           mobile: '',
           homeMobile: '',
           telephone: '',
        }
    },
    loanApplicant: {
        loanInfo: {
            visaApplyID: '',
            jobApplyID: '',
            totalRS: '444',
            loanAmount: '',
            amountOfMoney: '',
        },
        appliantInfo: {
            idNumber: '',
            frontPhotoOfIdCard: '',
            backPhotoOfIdCard: '',
            photoOfApplicant: '',
            signature: '',
        },
        fatherInfo: {
            isFatherPresent: '',
            fatherDeathCertificate: '',
            fatherIdNumber: '',
            fatherFrontPhotoOfIdCard: '',
            fatherBackPhotoOfIdCard: '',
            photoOfFather: '',
            signatureOfFather: '',
        },
        motherInfo: {
            isMotherPresent: '',
            motherDeathCertificate: '',
            motherIdNumber: '',
            motherFrontPhotoOfIdCard: '',
            motherBackPhotoOfIdCard: '',
            photoOfMother: '',
            signatureOfMother: '',
        },
        landDocument: {
            landLocation: '',
            landAmount: '',
            mediumOfGetting: '',
            plotNo: '',
            precursorDeathCertificate: '',
            inheritanceCertificate: '',
            houseLandDocuments: '',
            loanForm: '',
        },
        bankDetails: {
            bankName: '',
            accountIdNumber: '',
            bankBranchName: '',
            bankStatement: '',
        },
        communication: {
            email: '',
            phoneNumber: '',
            homePhoneNumber: '',
            comments: '',
        },
    },
    jobApplicant: {
        jobInfo: {
            fJobCountry: '',
            fJobNo: '',
            fJobSL: '',
            fJobName: '',
            fJobExperience: '',
            fJobExperienceCertificate: '',
            sJobCountry: '',
            sJobNo: '',
            sJobSL: '',
            sJobName: '',
            sJobExperience: '',
            sJobExperienceCertificate: '',
            tJobCountry: '',
            tJobNo: '',
            tJobSL: '',
            tJobName: '',
            tJobExperience: '',
            tJobExperienceCertificate: '',
            foJobCountry: '',
            foJobNo: '',
            foJobSL: '',
            foJobName: '',
            foJobExperience: '',
            foJobExperienceCertificate: '',
        },
        appliantInfo: {
            languages: '',
            nationality: '',
            nidCard: '',
            firstName: '',
            middleName: '',
            surname: '',
            fathersNameFirst: '',
            fathersNameMiddle: '',
            fathersNameSurname: '',
            mothersNameFirst: '',
            mothersNameMiddle: '',
            mothersNameSurname: '',
            streetAddress: '',
            streetAddressLine2: '',
            city: '',
            province: '',
            postal: '',
            country: '',
            dateOfBirth: '',
            photo: '',
            signature: '',
        },
        passportVisaDetails: {
            passportCountry: '',
            passportNumber: '',
            passportDateOfIssue: '',
            passportDateOfExpiry: '',
            visaApplicationID: '',
            medicalReport: '',
        },
        communication: {
            email: '',
            phoneNumber: '',
            homePhoneNumber: '',
        },
    

    },
    paymentInfo: {
       firstName:'',
       lastName:'',
       address1:'',
       address2:'',
       city:'',
       customer_state:'',
       zip:'',
       country:'',
       visaApplyID: '',
       method:'',
       amount: '',
       bankReceipt: ''
    },
    jobs: {
        title: '',
        shortDescription: '',
        photo: '',
        file: '',
        method: ''
    },
    notify: {}, auth: {}, visaApplications: [], jobApplications: [], loanApplications: [], payments: [], users: [], 
}