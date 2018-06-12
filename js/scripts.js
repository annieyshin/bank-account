//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.accountInfo = [];
}

function initialMoneyBalance (initialDeposit) {
  this.initialDeposit = initialDeposit;
}

function Account(depositAmount, withdrawalAmount, balance) {
  // this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
  this.balanace = balance;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Account.prototype.balance = function() {
  return "Your balance is: " + this.balance;
}

// Account.prototype.fullAccount = function() {
//   return this.initialDeposit + ", " + this.depositAmount + ", " + this.withdrawalAmount;
// }

// user interface logic
$(document).ready(function() {

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    console.log("stepone");
    $(".new-account-class").each(function() {
      var beginningMoneyBalance = parseInt($(this).find("input#apple").val());
      console.log(beginningMoneyBalance);
      var inputtedDepositAmount = parseInt($(this).find("input.deposit-amount").val());
      var inputtedWithdrawalAmount = parseInt($(this).find("input.withdrawal-amount").val());
      var newAccount = new Account(
        // inputtedInitialDeposit,
        inputtedDepositAmount, inputtedWithdrawalAmount)
      // var beginningMoneyBalance = parseInt($(this).find("input.initial-deposit-amount").val());
      newContact.accountInfo.push(newAccount)
      // changed newAccount to newContact
    });

    $("ul#account-holder-info").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");




    $(".contact").last().click(function() {
      $("#show-account-info").show();
      // $("#show-account-info h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#currentBalance").text("");
      newContact.accountInfo.forEach(function(zaccount) {
        $("ul#currentBalance").append("<li>" + zaccount.balance() + "</li>");
        $("#catbalance").show();
      });
    });


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.initial-deposit-amount").val("");
    $("input.deposit-amount").val("");
    $("input.withdrawal-amount").val("");


  });
// $( "#new-addresses" ).not( "submit" ).fadeOut();
});
