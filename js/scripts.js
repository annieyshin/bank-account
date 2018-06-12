//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.accountInfo = [];
}

function Account(initialDeposit, depositAmount, withdrawalAmount) {
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Account.prototype.fullAccount = function() {
  return this.initialDeposit + ", " + this.depositAmount + ", " + this.withdrawalAmount;
}

// user interface logic
$(document).ready(function() {

  $("#add-account").click(function() {
  $("#new-account").append('<div class="new-account-class">' +
                               '<div class="form-group">' +
                                 '<label for="deposit-amount-label">Deposit Amount</label>' +
                                 '<input type="text" class="form-control deposit-amount">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="withdrawal-amount-label">Withdrawal Amount</label>' +
                                 '<input type="text" class="form-control withdrawal-amount">' +
                               '</div>' +
                             '</div>');
});

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    console.log("stepone");
    $(".new-account-class").each(function() {
      var inputtedInitialDeposit = $(this).find("input#apple").val();
      console.log(inputtedInitialDeposit);

      var inputtedDepositAmount = $(this).find("input.deposit-amount").val();
      var inputtedWithdrawalAmount = $(this).find("input.withdrawal-amount").val();
      var newAccount = new Account(inputtedInitialDeposit, inputtedDepositAmount, inputtedWithdrawalAmount)
      newContact.accountInfo.push(newAccount)
      // changed newAccount to newContact
    });

    $("ul#account-holder-info").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");




    $(".contact").last().click(function() {
      $("#show-account-info").show();
      $("#show-account-info h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#currentBalance").text("");
      newContact.accountInfo.forEach(function(zaccount) {
        $("ul#currentBalance").append("<li>" + zaccount.fullAccount() + "</li>");
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
