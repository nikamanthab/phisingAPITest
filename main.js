console.log("connected...")
console.log(axios)
var data;
axios.post(
    'http://checkurl.phishtank.com/checkurl/index.php?url=https://www.google.com&format=json&app_key=7f99deec9e01fa87114162be5cb3a64feb02f18237786a39cf9fa363bc207fa1'
    )
  .then(function (response) {
    data = response.data;
    console.log(response.data);
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data,"text/xml");
    console.log(xmlDoc.querySelector("valid").innerHTML);
  })
  .catch(function (error) {
    console.log(error);
  });