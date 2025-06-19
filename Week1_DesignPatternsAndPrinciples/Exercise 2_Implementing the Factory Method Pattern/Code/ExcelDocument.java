package com.week1.factorypattern;

public class ExcelDocument implements Document {

	@Override
	public void openDocument() {
		System.out.println("Excel Document created");
		
	}

}
