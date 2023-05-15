const url =
  "https://e0trfbwn52-e0alzr6oec-connect.de0-aws.kaleido.io/instances/ss126/getPublicKey?kld-from=0xfc0507b19b24be541dccba055ffc459da01ef8e9";

fetch(url, {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Basic ZTB2eGtseXI0czo0akN2REszOEtnVkk2NkVDbWc5eEpMQWh6YjVhbVloWEMzMHV6YW02LXY4",
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data here
    console.log(data);
  })
  .catch((error) => {
    // Handle any error that occurred
    console.error(error);
  });
