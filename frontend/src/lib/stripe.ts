import Stripe from "stripe"

export const stripe = new Stripe("sk_test_51NEAWFAbedfhBaKkIThoBULkyHpuXnD4TpQMebPEcJrAOyBQKQC4bRoIG7W1bS0WxSOXvVfiFynM0Fs7Lsw0wGIZ00rqUUCN04", {
  apiVersion: "2022-11-15",
})