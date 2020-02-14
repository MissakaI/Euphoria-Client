private static void findAccountDetails(String email, String country) {

    Table table = dynamoDB.getTable(tableName);

    String replyId = email + "#" + country;

    QuerySpec spec = new QuerySpec().withKeyConditionExpression("Id = :v_id")
        .withValueMap(new ValueMap().withString(":v_id", replyId));

    ItemCollection<QueryOutcome> items = table.query(spec);

    System.out.println("\nfindRepliesForAThread results:");

    Iterator<Item> iterator = items.iterator();
    while (iterator.hasNext()) {
        System.out.println(iterator.next().toJSONPretty());
    }

}