—
path: “/coding/fixerfixed”
date: "2018-07-16T09:35:00"
title: “Fixer.io Free Tier workaround”
tags: ['welcome','blog'](#)
excerpt: “Using free tier of Fixer.io to convert using a base currency“
---
*Fixer.io workaround*

The free pricing tier on Fixer.io has changed to only allow currency conversions between EUR and your chosen currencies, I.e. Base currency is disabled in the api call. 

To work around this I set my base currency in the API call to EUR, and included the base currency symbol I wanted in my selected rates. 

Then, you can use EUR to be the go-between to give you whatever conversion you need. 

As we will get back the EUR -\> Target rates in the JSON we have

*EUR -\> Base
*EUR -\>Target(s)

So first off (having parsed the JSON using SwiftJSON :) ) into an object called *rates*.

```swift
for currency in rates 
			// invert all the rates retrieved as JSON won't always be in the order we requested
			let rateName = currency.key
			let rateValue = 1 / currency.value.doubleValue
			//grab our chosen baseCurrencyRate from this array
			if rateName == baseCurrency 
				baseRate = rateValue
				
			}
		}
```

All this is doing is looping through the returned rates, and inverting them - so we have rate -\> EUR and grabbing our proper base rate from this using the key.

Then a second loop through the JSON to now divide each rate by our base currency, giving the proper conversion rate base -\> target

```swift
 for symbol in rates {
			// invert all the rates retrieved as JSON won't always be in the order we requested
			let rateName = symbol.key
			let rateValue = 1 / symbol.value.doubleValue
			//grab our chosen baseCurrencyRate from this array
		
		
			fetchedCurrencies.append((symbol: rateName, rate: baseRate / rateValue))
			
		}
```

This way you can convert without needing a base currency in your API call 