document.getElementById('qr-code-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const urlInput = document.getElementById('url-input');
  const url = urlInput.value;

  const qrCodeDiv = document.querySelector('.qr-code');
  qrCodeDiv.classList.remove('error');
  qrCodeDiv.innerHTML = '';

  const downloadLink = document.getElementById('download-link');
  downloadLink.style.display = 'none';

  try {
    const qrCodeImage = await generateQRCode(url);
    qrCodeDiv.style.backgroundImage = `url(${qrCodeImage})`;
    qrCodeDiv.classList.add('generated');
    downloadLink.href = qrCodeImage;
    downloadLink.style.display = 'block';
  } catch (error) {
    qrCodeDiv.classList.add('error');
    qrCodeDiv.innerHTML = 'Error generating QR code.
