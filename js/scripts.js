//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.accountInfo = [];
}

function Account(maybeName, initialDeposit, depositAmount, withdrawalAmount) {
  // this.maybeName = maybeName;
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Account.prototype.fullAccount = function() {
  return
  // this.maybeName + ": " +
  this.initialDeposit + ", " + this.depositAmount + ", " + this.withdrawalAmount ;
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

    $(".new-account").each(function() {
      var inputtedInitialDeposit = parseInt($(this).find("input.initial-deposit-amount").val());
      var inputtedDepositAmount = parseInt($(this).find("input.deposit-amount").val());
      var inputtedWithdrawalAmount = parseInt($(this).find("input.withdrawal-amount").val());
      var newAccount = new Account(inputtedInitialDeposit, inputtedDepositAmount, inputtedWithdrawalAmount)
      newAccount.accountInfo.push(newAccount)
      console.log(initialDeposit)
    });

    $("ul#account-holder-info").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");




    $(".contact").last().click(function() {
      $("#show-account-info").show();
      $("#show-account-info h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#account-holder-info").text("");
      newContact.accountInfo.forEach(function(zaccount) {
        $("ul#currentBalance").append("<li>" + zaccount.fullAccount() + "</li>");
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
