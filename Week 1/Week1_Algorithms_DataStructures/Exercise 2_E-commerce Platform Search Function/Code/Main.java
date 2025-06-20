package com.searchfunction;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
	public static void main(String args[]) {
		Scanner s=new Scanner(System.in);
		System.out.println("Enter number of products");
		int n=s.nextInt();
		Product products[] = new Product[n];
		for(int i=0;i<n;i++) {
			System.out.println("Enter the Product "+(i+1)+" id,name,category:");
			products[i]=new Product(s.nextInt(),s.next(),s.nextLine())     	;
		}
		
		System.out.println("Linear Search:\n Enter the product name to search:");
        Product result1 = Search.linearSearch(products, s.nextLine());
        if(result1!=null)
        	System.out.println(result1);
        else
        	System.out.println("Product not found");

        
        Arrays.sort(products,new SortByProductName());
        System.out.println("\nBinary Search:\n Enter the product name to search:");
        Product result2 = Search.binarySearch(products, s.nextLine());
        if(result2!=null)
        	System.out.println(result2);
        else
        	System.out.println("Product not found");
		
		
	}
}

class SortByProductName implements Comparator<Product>
{

	@Override
	public int compare(Product p1, Product p2) {
		return (p1.productName).compareTo(p2.productName);
	}
}