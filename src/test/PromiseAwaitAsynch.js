import React from "react";

const url = "https://bln9cf30wj.execute-api.ap-southeast-1.amazonaws.com/default/pythontest?filename=s3://biorithm-testing-data/racer-06-oct/A202.csv";

const PromiseView = () => {

    const [name, setName] = React.useState("");
    const [sqi, setSqi] = React.useState();

    const callAPI = new Promise(function(resolve, reject) {
        // Call API
        let response = 1;
        if (response==1) {
            resolve("OK");
        } else {
            reject("ERROR")
        }
    });

    const callSQIAPI = () => {
              fetch(url)
        .then(response => response.json())
        .then(result => {
              console.log(result);
              setSqi(result);
      })
        .catch(error => console.log('error', error));
    }


    React.useEffect(effect => {

        // simple call API
        callAPI.then(
            function (name){
                setName(name)
            },
            function (error){
                setName(error)
            }
        )

        //
        callSQIAPI();

    }, [])

    return (
        <h1>Promise Await Asynch {name} </h1>
    )
}
export  default  PromiseView;