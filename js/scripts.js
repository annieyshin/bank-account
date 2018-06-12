//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Account(maybeName, initialDeposit, depositAmount, withdrawalAmount) {
  this.maybeName = maybeName;
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// Account.prototype.fullAccount = function() {
//   return this.maybeName + ", " + this.initialDeposit + ", " + this.depositAmount + ", " + this.withdrawalAmount ;
// }

// user interface logic
$(document).ready(function() {

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-account").each(function() {
      var inputtedInitialDeposit = $(this).find("input.initial-deposit-amount").val();
      var inputtedDepositAmount = $(this).find("input.deposit-amount").val();
      var inputtedWithdrawalAmount = $(this).find("input.withdrawal-amount").val();
      var newAccount = new Account(inputtedInitialDeposit, inputtedDepositAmount, inputtedWithdrawalAmount)
      newAccount.Account.push(newAccount)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");


  });
// $( "#new-addresses" ).not( "submit" ).fadeOut();

});
