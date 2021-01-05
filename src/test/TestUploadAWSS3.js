// 05 JAN 2020
// Upload file to S3 by Storage
// Upload file to S3 by AWS.S3.ManagedUpload
// comment: ACL and double check poolid

import React, {useEffect, useState} from "react";
import AWS from 'aws-sdk';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AttachmentIcon from "@material-ui/icons/Attachment";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {Storage} from "aws-amplify";

var albumBucketName = "amplifyjsdb22d608f3e94d85852ea891d3a9bbca114347-dev";
var bucketRegion = "ap-southeast-1";
var IdentityPoolId = "ap-southeast-1:3e2e2a97-9f56-42a8-8df0-68676a7680c8";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName }
});

const TestUploadAWSS3View = () => {
    const [file, setFile] = useState();
    useEffect(effect => {
        const file = "";
        const photoKey = "1234";
    }, [])

    const onChange = (event) => {
        setFile(event.target.files[0]);
        console.log("file choosen", event.target.files[0]);
    }

    const onSubmit = (event) => {
        console.log("uploading...");
        let uploadFile = file;
        if (!uploadFile) {
            alert("Choose a valid file ");
        } else {
            //
            var upload = new AWS.S3.ManagedUpload({
                params: {
                  Bucket: albumBucketName,
                  Key: "public/"+uploadFile.name,
                  Body: uploadFile,
                  // ACL: "public-read"
                }
              });
            //
            upload.promise().then(
                function(data){
                    alert("Uploaded successfully");
                },
                function(error){
                    console.log("error uploading", error);
                }
            )
        }
    }

    return (
        <div>
            <input
            accept="text/csv"
            id="contained-button-file"
            multiple
            type="file"
            onChange = {event => {onChange(event)}}
            />
        <Button
            variant="contained"
            color="primary"
            onClick = {event => {onSubmit(event)}}>
            <CloudUploadIcon></CloudUploadIcon>
            Upload</Button>
        </div>
    )
}

export default TestUploadAWSS3View;