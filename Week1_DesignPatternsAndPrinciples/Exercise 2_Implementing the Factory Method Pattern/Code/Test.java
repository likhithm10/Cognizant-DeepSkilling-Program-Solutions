package com.week1.factorypattern;

public class Test {
	public static void main(String args[])
	{
		DocumentFactory df=new WordDocumentFactory();
		Document d=df.createDocument();
		d.openDocument();
		
		DocumentFactory df2=new ExcelDocumentFactory();
		Document d2=df2.createDocument();
		d2.openDocument();
		
	}

}
