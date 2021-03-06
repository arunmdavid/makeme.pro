/*var faqs = [
  {q: 'What is A?', a: 'A for Apple.'},
  {q: 'What is B?', a: 'B for Ball.'},
  {q: 'What is C?', a: 'C for Cat.'},
];
var faqElement = document.createElement('div');
var faqHtml = '<h4>Frequently Asked Questions (FAQ)</h4><hr/>';
var faqSchemaJson = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[]};
faqs.forEach(function(faq, index){
  faqHtml += '<div><h5>' + faq.q + '</h5>' + '<p>' + faq.a + '</p></div><hr/>';
  faqSchemaJson.mainEntity.push({
    "@type":"Question", "name": faq.q,
    "acceptedAnswer":{
      "@type":"Answer", "text": faq.a
    }
  });
});
faqElement.innerHTML=faqHtml;
var faqSchemaElement = document.createElement('script');
faqSchemaElement.type = 'application/ld+json';
faqSchemaElement.text = JSON.stringify(faqSchemaJson);
if (faqs.length) {
  document.currentScript.parentNode.insertBefore(faqElement, document.currentScript.nextSibling);
  document.querySelector('head').appendChild(faqSchemaElement);
}*/
var currentScript = document.currentScript;
var faqPath = 'default.json';
if (window.location == 'https://www.doparttime.com/jobs/Chennai') {
   faqPath = 'chennai.json';
}
fetch('//www.makeme.pro/' + faqPath).then(function(response) {response.json().then(function(resp) {
  var faqs = resp.data.faqs;
  var faqElement = document.createElement('div');
  var faqHtml = '<h4>Frequently Asked Questions (FAQ)</h4><hr/>';
  var faqSchemaJson = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[]};
  faqs.forEach(function(faq, index){
    faqHtml += '<div><h5>' + faq.q + '</h5>' + '<p>' + faq.a + '</p></div><hr/>';
    faqSchemaJson.mainEntity.push({
      "@type":"Question", "name": faq.q,
      "acceptedAnswer":{
        "@type":"Answer", "text": faq.a
      }
    });
  });
  faqElement.innerHTML=faqHtml;
  var faqSchemaElement = document.createElement('script');
  faqSchemaElement.type = 'application/ld+json';
  faqSchemaElement.text = JSON.stringify(faqSchemaJson);
  if (faqs.length) {
    currentScript.parentNode.insertBefore(faqElement, currentScript.nextSibling);
    document.querySelector('head').appendChild(faqSchemaElement);
  }
});});
