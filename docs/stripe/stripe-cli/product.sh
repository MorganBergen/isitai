# bash script

##  basic

```
stripe products create \
  --name "Basic" \
  --description "10 images per month" \
  --data 'default_price_data[unit_amount]=100' \
  --data 'default_price_data[currency]=usd' \
  --data 'default_price_data[recurring][interval]=month'

{
  "id": "prod_SkVva7voinea0p",
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1753508659,
  "default_price": "price_1Rp0u7D3wDlemsCxJZRu2YM4",
  "description": "10 images per month",
  "images": [],
  "livemode": false,
  "marketing_features": [],
  "metadata": {},
  "name": "Basic",
  "package_dimensions": null,
  "shippable": null,
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1753508659,
  "url": null
}

```


#  personal

```
stripe products create \
  --name "Personal" \
  --description "100 images per month" \
  --data 'default_price_data[unit_amount]=1000' \
  --data 'default_price_data[currency]=usd' \
  --data 'default_price_data[recurring][interval]=month'

{
  "id": "prod_SkVzfMp93TzEaH",
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1753508888,
  "default_price": "price_1Rp0xoD3wDlemsCxE5ve4XGx",
  "description": "100 images per month",
  "images": [],
  "livemode": false,
  "marketing_features": [],
  "metadata": {},
  "name": "Personal",
  "package_dimensions": null,
  "shippable": null,
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1753508888,
  "url": null
}

```

#  professional

````
stripe products create \
  --name "Professional" \
  --description "1,000 images per month" \
  --data 'default_price_data[unit_amount]=5000' \
  --data 'default_price_data[currency]=usd' \
  --data 'default_price_data[recurring][interval]=month'

{
  "id": "prod_SkW0tVdgTPZc4a",
  "object": "product",
  "active": true,
  "attributes": [],
  "created": 1753508907,
  "default_price": "price_1Rp0y7D3wDlemsCx5qsrjyhU",
  "description": "1,000 images per month",
  "images": [],
  "livemode": false,
  "marketing_features": [],
  "metadata": {},
  "name": "Professional",
  "package_dimensions": null,
  "shippable": null,
  "statement_descriptor": null,
  "tax_code": null,
  "type": "service",
  "unit_label": null,
  "updated": 1753508907,
  "url": null
}

```

