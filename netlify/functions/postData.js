exports.handler = async function (event, context) {
    const data = JSON.parse(event.body); // POST isteğinden gelen veriler
    // Veriyi işleme veya veritabanına kaydetme işlemleri burada yapılır
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Data has been received and processed.' }),
    };
  };
  