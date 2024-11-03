function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  var content = document.getElementById("cv-content").innerHTML;

  doc.html(content, {
      callback: function (doc) {
          doc.save('Resume.pdf');
      },
      x: 10,
      y: 10
  });
}