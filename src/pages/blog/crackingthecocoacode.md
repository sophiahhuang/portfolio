---
layout: ../../layout/MarkdownLayout.astro
title: "Cracking the Cocoa Code with Data (Part 1)"
description: "Does More Cocoa Mean Better Taste?"
pubDate: 2024-02-19
tags:
  [
    "Chocolate",
    "Exploratory Data Analysis (EDA)",
    "Data Visualization",
    "Data Storytelling",
    "Data-driven",
    "ChatGPT",
  ]
---

# Cracking the Cocoa Code with Data (Part 1): Does More Cocoa Mean Better Taste?

## TL;DR

```
- Weak Link: More cocoa in chocolate doesn’t strongly affect how much people like it.
- Significant but Small: The connection we found is real but really tiny.
- Look Beyond Cocoa: There’s more to yummy chocolate than just high cocoa percentages.
```

## Overview

A few of my friends belong to the exclusively dark chocolate camp. I always pondered whether darker, high-cocoa chocolate bars are truly superior in taste and cost more. It turns out the [Manhattan Chocolate Society](http://flavorsofcacao.com/mcs_index.html) has been keeping records of their tastings since June 2007. They compare and discuss the qualities of fine chocolate to inspire higher quality product.

I am building on top of the high-level analysis on this popular [dataset](http://flavorsofcacao.com/index.html) conducted by [Lisa Chen](https://medium.com/swlh/willy-wonka-and-the-data-driven-chocolate-factory-c08d10c7dbc0) and [Alexey Samoylov](https://www.kaggle.com/code/tibhar940/chocolate-bar-ratings-python-eda-dataviz) by going both deeper into each variable and broader on the relationships between variables. This is the first part of many to come on Cracking the Cocoa Code with Data. My Follow along [link to my data analysis and visualization on colab](https://colab.research.google.com/drive/1bgMQqa-S2JRsYWFZ3zsYrpfa00E4mPb_#scrollTo=cMvmcGUITZOR)

## What You Will Learn

- Guide exploratory data analysis (EDA) with curiosity and a microscopic lens
- Structure the approach to encourage big picture thinking and avoid rabbit holes
- Define outline or deliverables before you start
- Tap into your intuition to see beyond the data

## Summary and Descriptive Statistics

![CocoaCode1](/images/CocoaCode1.webp)

- Total of 1692 chocolate bars
- "Ingredients" has 87 missing values
- Covers span of 17 years from the year 2006 to 2023
- A diverse range of taste profiles and descriptive terms used by the reviewers, e.g. 2,614+, may be related to the open-ended description in data collection. (More )
- Avg rating is 3.20 with a standard deviation of 0.44, indicating a moderate variation in the ratings

## Missing Data, Distribution, and Potential Bias

Notably, some entries lack information on ingredients or specific bean origins, which could limit our analysis. The overall distribution of data points across countries and cocoa percentages may be poentially biased. Some regions have more data than others.

## Limitations and Assumptions

- Geographical Bias: The dataset might over-represent certain countries, both in terms of bean sourcing and chocolate production.
- Taste Subjectivity: Ratings are subjective, influenced by individual preferences, cultural tastes, and sampling of chocolate bars.
- Missing Data: Missing ingredients or specific origins may lead to gaps of understanding on taste.

## Experiment

- Objective: To determine if there's a link between cocoa content and taste ratings in chocolate.
- Method: We used the Pearson correlation coefficient, a statistical tool that measures the strength and direction of a relationship between two variables. Data visualization
- Data Source: [Manhattan Chocolate Society](http://flavorsofcacao.com/mcs_index.html)

## What We Found

### 1. Higher cocoa content does not always equate to higher ratings

![CocoaCode3](/images/CocoaCode3.webp)

- Correlation Coefficient (-0.142): This indicates a slight, negative relationship between cocoa percentage and taste ratings. More cocoa doesn't guarantee a better taste. The effect is quite minimal.
- P-Value (1.93×10^(-13)): This extremely small number confirms that our findings are statistically significant, meaning the slight relationship we observed isn't due to random chance.
- A large number of chocolates have cocoa percentages around 70%, indicating a popular choice for chocolate makers. The positive skewness indicates that fewer chocolates have very high cocoa content.

### 2. 70% +/-2 is optimal amount of cocoa percent over time

![CocoaCode4](/images/CocoaCode4.webp)

- Over time, the average cocoa percentage in chocolates does not show a significant shift for every 6 years increment, staying around 70%.
  ![CocoaCode5](/images/CocoaCode5.webp)
  ![CocoaCode6](/images/CocoaCode6.webp)
- The box plots indicate that while there is some variation in cocoa percentages, the overall amount remains steady at 71.6%.

## What Does This Mean for Chocolate Lovers?

The data suggests that while there's a minor trend where higher cocoa might not equate to higher enjoyment, it's not strong enough to make a definitive rule. It's akin to discovering a tiny detail that's interesting but not game-changing.

## So, What Should Chocolate Makers Do?

For those crafting chocolate or those who love indulging in it, here's the takeaway:

- Look Beyond Cocoa: The percentage of cocoa is just one factor. The origin of the beans, the manufacturing process, and additional ingredients significantly influence the final taste.
- Diverse Tastes: Recognize that taste preferences vary widely. What delights one person might not impress another, regardless of cocoa content.

## Key Takeaway for The Data-Minded

- Findings: The Pearson correlation coefficient of approximately -0.142, along with a statistically significant p-value (1.93×10^13), indicates a weak but statistically significant negative relationship between cocoa percentage and chocolate rating. This suggests that higher cocoa percentages are slightly associated with lower ratings, but the overall effect is very small.

- Interpretation: While the statistical analysis reveals a significant relationship, the practical impact of cocoa percentage on chocolate rating appears to be minimal. This implies that factors other than cocoa percentage are more influential in determining the overall rating of chocolate bars.

- Recommendation: Stakeholders, such as chocolatiers and chocolate manufacturers, should consider other attributes alongside cocoa percentage when aiming to improve the quality and appeal of their products. These may include the origin of cocoa beans, processing techniques, additional ingredients, and flavor profiles. Consumer preferences and market trends should also be considered to enhance product ratings and satisfaction. This balanced approach, taking into account both statistical significance and practical relevance, will help in making informed decisions that align with consumer expectations and industry standards.

## Next: Impact of Geography

Preview on the role of bean source and chocolate maker on rating.

![CocoaCode8](/images/CocoaCode8.webp)
![CocoaCode9](/images/CocoaCode9.webp)
