<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6">
                <el-select v-model="value" placeholder="分类">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-select v-model="value1" placeholder="状态">
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="12">
                <el-input placeholder="请输入关键词进行搜索" v-model="input2">
                    <template slot="append">搜索</template>
               </el-input>
            </el-col>
        </el-row>
        <div class="recordCount">共<span style="color:red;">{{totalCount}}</span>条信息</div>
        <el-row class="recordItem">
            <el-col :span="6">
                <el-image
                style="width: 80%; height: 80%"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                fit="scale-down"></el-image>
            </el-col>
            <el-col :span="18">
                <el-row>
                    锤子R1价格赶超苹果iPhoneX，顶配骁龙845+1T卖到8848元你入手吗<el-tag type="success">正常</el-tag>
                </el-row>
                <el-row>
                    2018-05-15 23:37:33 | 推荐：0 | 阅读：0 | 分享：0
                </el-row>
            </el-col>
        </el-row>
        <el-row class="recordItem">
            <el-col :span="6">
                <el-image
                style="width: 80%; height: 80%"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                fit="scale-down"></el-image>
            </el-col>
            <el-col :span="18">
                <el-row>
                    锤子R1价格赶超苹果iPhoneX，顶配骁龙845+1T卖到8848元你入手吗<el-tag type="warning">隐藏</el-tag>
                </el-row>
                <el-row>
                    2018-05-15 23:37:33 | 推荐：0 | 阅读：0 | 分享：0
                </el-row>
            </el-col>
        </el-row>
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageHtml: 'page/article/article',
            options: [{
                value: '0',
                label: '分类1'
            }, {
                value: '1',
                label: '分类2'
            }, {
                value: '3',
                label: '分类3'
            }],
            value: '',
            options1: [{
                value: '0',
                label: '正常'
            }, {
                value: '1',
                label: '隐藏'
            }, {
                value: '2',
                label: '审核中'
            }],
            value1: '',
            input2: '',
            currentPage3: 5,
            totalCount: 9
        };
    },
    methods: {
       handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
};
</script>

<style>
  .el-row {
    margin-top: 20px;
  }
  .el-col {
    border-radius: 10px;
  }
  .recordCount {
      margin-top: 20px;
      text-indent: 2em;
  }
  .recordItem {
      margin-top: 0px;
      border: 1px solid darkgray;
      margin-top: 10px;
  }
  .recordItem .el-col {
      padding-top: 10px;
      padding-bottom: 10px; 
  }
  .recordItem .el-col .el-image{
      margin: 0 auto;
      display: block;
  }
  .el-tag {
      padding: 0 5px;
      height: 22px;
      line-height: 20px;
      font-size: 12px;
      margin-left: 5px;
  }
  .block {
      margin: 0 auto;
      margin-top: 35px;
  }
  .block .el-pagination{
      float: right;
  }
</style>