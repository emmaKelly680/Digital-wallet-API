
Registration
POST api/auth/register
POST api/auth/login

Wallets
POST /wallets - create new wallet
GET /wallets/:user_id - list all wallets owned by a user
GET /wallets/:wallet_id/balance 
GET /wallets/:wallet_id - details about a wallet

Transactions
POST /transfers
GET /transactions
GET /transactions/:transaction_id

Admin can freeze balance in case of fraud