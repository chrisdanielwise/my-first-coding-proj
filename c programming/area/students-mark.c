#include <stdio.h>

// Write a program to request a student’s name and marks in four subjects. The 
// program must print the name, total marks, and average mark, appropriately 
// labeled

int main(){
    char name[30];
    double subj1, subj2, subj3, subj4 ,total, average;
    printf("\nwhat is your name?\n");
    gets(name);
    printf("\nwhat did you score in subj1?\n");
    scanf("%lf",&subj1);
    printf("\nwhat did you score in subj2?\n");
    scanf("%lf",&subj2);
    printf("\nwhat did you score in subj3?\n");
    scanf("%lf",&subj3);
    printf("\nwhat did you score in subj4?\n");
    scanf("%lf",&subj4);
    average = (subj1 + subj2 + subj3 + subj4)/4;
    total = subj1 + subj2 + subj3 + subj4;
    printf("\nDear, %s you offered 4 subjects and below are you average and total mark in All\n",name);
    printf("\nYour average score is %.2lf\n",average);
    printf("Your total mark is %.2lf",total);
}