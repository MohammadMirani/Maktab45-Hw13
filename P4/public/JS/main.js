$(".btn-primary").click(function () {
  let user = $(".username").val();
  if (user) {
    $.ajax({
      type: "POST",
      url: "/getUser",
      data: { user },
      success: function (response) {
        console.log(response);
        $(".alert").removeClass("alert-info");
        $(".alert").removeClass("alert-danger");

        $(".alert").addClass("alert-success");
        let html = `<p>id: ${response.id}</p>
                    <p>firstName: ${response.firstName}</p>
                    <p>lastName: ${response.lastName}</p>
                    <p>age: ${response.age}</p>
                    <p>tell: ${response.tell}</p>`;
        $(".alert").html(html);
      },
      error: function (err) {
        $(".alert").text(err.responseText);
        $(".alert").removeClass("alert-info");
        $(".alert").removeClass("alert-success");
        $(".alert").addClass("alert-danger");
        console.log(err.responseText);
      },
    });
  } else {
    $(".alert").text("Enter a name");
  }
});
