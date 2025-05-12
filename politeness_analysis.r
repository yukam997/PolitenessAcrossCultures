# Setup 
library(lme4)
library(lmerTest)
library(tidyverse)
library(DT)
library(simr)
library(ggeffects)
library(cowplot)
library(broom.mixed)
library(MuMIn)


# Modifiers used in the study: extremely, kind of, quite, slightly, very (strongest effects for "quite" and "very", "slightly" weaker
# Candidates for new study: quite, very, absolutely, a bit, really, totally, so (?), awfully (irony and humor)

# Data Loading 
df <- read.csv("data/combined.csv")
# Experiment 1
df <- df %>%
  mutate(modifier_direction = case_when(
    modifier %in% c("slightly", "kind of", "quite") ~ "negative",
    modifier %in% c("very","extremely") ~ "positive",
    TRUE ~ NA_character_
  ))
# pol_effect_dir multiply politeness by -1 if modifier is negative, otherwise leave it as is
df <- df %>%
  mutate(pol_effect_dir = case_when(
    modifier_direction == "negative" ~ -politeness_difference,
    TRUE ~ politeness_difference
  ))
politeness_model <- lmer(interpretation_difference ~ 
           country * modifier + predicate + pol_effect_dir +
           (1|person_id) + (1|scenario), 
           data = df)
summary(politeness_model)


interaction_model <- lmer(interpretation_difference ~ 
           country * modifier + predicate +
           (1|person_id) + (1|scenario), 
           data = df)
summary(interaction_model)

anova(interaction_model, politeness_model)

politeness_model_big <- lmer(interpretation_difference ~ 
          modifier*predicate + pol_effect_dir
          +  (1|person_id) + (1|scenario), 
           data = df)
summary(politeness_model_big)

interaction_model_big <- lmer(interpretation_difference ~ 
           modifier* predicate +
           (1|person_id) + (1|scenario), 
           data = df)
summary(interaction_model_big)
anova(interaction_model_big, politeness_model_big)


#anova(model , type = "III")