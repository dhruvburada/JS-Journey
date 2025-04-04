//real world example of closures

function bankAccount()
{
  let balance = 0;
  return {
    deposit:function(amount)
    {
      return balance+=amount
    },
    withdraw:function(amount)
    {
      if(balance>=amount)
      {
        return balance-=amount;
      }
      else
      {
        console.log("Sorry Insufficent Funds");
      }
    },
    viewBalance : function()
    {
      console.log("balance = ",balance)
    }
    
    
    
  }
}

let account1 = bankAccount();
account1.viewBalance()
account1.deposit(100);
account1.viewBalance();
account1.withdraw(50);
account1.viewBalance();

